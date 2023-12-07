const { User } = require('../../database/models')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const jwtSecret = 'carlossoares@'

exports.Register = async (req, res) => {
  const { email, password, confirmPassword } = req.body

  if (!email || !password || !confirmPassword) {
    return res
      .status(400)
      .json({ error: 'Username, email, and password are required' })
  }

  if (password !== confirmPassword) {
    return res
      .status(400)
      .json({ error: 'Password and confirmPassword must match' })
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 8 characters long' })
  }

  // Adiciona mais verificações à senha
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/

  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      error:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    })
  }

  const userExist = await User.findOne({ where: { email } })
  if (userExist) {
    return res
      .status(200)
      .json({ exists: true, message: 'There is an account with this email' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      password: hashedPassword
    })

    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret)

    // Envia o token no cabeçalho da resposta
    res.setHeader('Authorization', `Bearer ${token}`)
    res.status(200).json('Usuario criado com Sucesso.')
  } catch (error) {
    return res.status(500).json('Erro ao registrar o usuário')
  }
}
exports.Login = async (req,res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' })
  }

  // Verifica se ele possue uma conta
  const user = await User.findOne({ where: { email } })
  if (!user) {
    return res.status(400).json({ error: 'Email inválido.' })
  }

  try {
    // Verificar a senha do usaurio
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json('Credenciais inválidas')
    }

    // Gerar um token de acesso
    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret)

    // Envia o token no cabeçalho da resposta
    res.setHeader('Authorization', `Bearer ${token}`)
    res.status(200).json({ message: 'Login Bem feito', token })
  } catch (error) {
    console.log('Erro ao registrar o usuário:', error)
    res.status(500).json('Erro ao registrar o usuário')
  }
}