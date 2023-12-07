const { Music } = require('../../database/models')
const fs = require('fs').promises 
const path = require('path')

exports.addMusic = async (req, res) => {
  try {
    const { title, artist } = req.body
    const userId = req.user.userId
    const audioPath = req.files['audio'][0].filename
    const imagePath = req.files['image'][0].filename

    const newSong = await Music.create({
      title,
      artist,
      imagePath,
      audioPath,
      UserId: userId
    })

    res
      .status(200)
      .json({ message: 'A Música foi adicionada com sucesso', newSong })
  } catch (error) {
    console.error('Algo deu errado ao processar:', error)
    res.status(500).json('Erro ao processar a música')
  }
}

exports.List = async (req, res) => {
  try {
    const musicList = await Music.findAll({
      order: [['createdAt', 'DESC']]
    })
    res.status(200).json(musicList)
  } catch (error) {
    console.error('Erro ao buscar a lista de músicas:', error)
    res.status(500).json('Erro ao buscar a lista de músicas')
  }
}

exports.MyList = async (req, res) => {
    const userId = req.user.userId
  try {
    const musicList = await Music.findAll({
      where: {userId: userId},
    })
    if (musicList.length === 0) {
      return res.status(404).json('Este usuário não possui nenhuma música')
    }

    res.status(200).json(musicList)

  } catch (error) {
    console.error('Erro ao buscar a lista de músicas:', error)
    res.status(500).json('Erro ao buscar a lista de músicas')
  }
}

exports.Delete = async (req, res) => {
  const userId = req.user.userId
  const musicId = req.params.id

  try {
    const music = await Music.findByPk(musicId)

    if (!music) {
      return res.status(404).json('Música não encontrada')
    }

    if (music.UserId !== userId) {
      return res
        .status(403)
        .json('Você não tem permissão para excluir esta música')
    }

    // Construa o caminho do arquivo de áudio e imagem
    const audioPath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      'musics',
      music.audioPath
    )
    const imagePath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      'images',
      music.imagePath
    )

    // Verifique se o arquivo de áudio existe antes de tentar excluí-lo
    try {
      await fs.stat(audioPath)
      // Remova o arquivo de áudio
      await fs.unlink(audioPath)
    } catch (error) {
      console.error('Erro ao acessar ou excluir arquivo de áudio:', error)
    }

    // Verifique se o arquivo de imagem existe antes de tentar excluí-lo
    try {
      await fs.stat(imagePath)
      // Remova o arquivo de imagem
      await fs.unlink(imagePath)
    } catch (error) {
      console.error('Erro ao acessar ou excluir arquivo de imagem:', error)
    }

    // Remova o registro da música no banco de dados
    await music.destroy()

    res.status(200).json('Música excluída com sucesso')
  } catch (error) {
    console.error('Erro ao excluir música:', error)
    res.status(500).json('Erro ao excluir música')
  }
}

// exports.Play = async (req, res) => {
//   const musicId = req.params.id

//   try {
//     const music = await Music.findByPk(musicId)

//     if (!music) {
//       return res.status(404).json('Música não encontrada')
//     }

//     const audioPath = path.join(__dirname, '..', '..', 'uploads', 'musics',  music.audioPath)
//     console.log(audioPath)
//     // Configurar o stream de leitura do arquivo de áudio com um buffer de 64 KB
//     const buffer = Buffer.alloc(64 * 1024)
//     const audioStream = fs.createReadStream(audioPath, {
//       highWaterMark: buffer.length
//     })

//     // Configurar os cabeçalhos da resposta para indicar que é um stream de áudio
//     res.writeHead(200, {
//       'Content-Type': 'audio/mpeg', // ou o formato apropriado
//       'Content-Length': fs.statSync(audioPath).size
//     })

//     // Transmitir o áudio para o cliente em tempo real usando streaming
//     audioStream.on('data', chunk => {
//       if (!res.write(chunk)) {
//         // Paused streaming to prevent memory overload
//         audioStream.pause()
//       }
//     })

//     audioStream.on('end', () => {
//       res.end()
//     })

//     // Retomar o streaming quando o buffer estiver vazio
//     res.on('drain', () => {
//       audioStream.resume()
//     })
//   } catch (error) {
//     console.error('Erro ao transmitir áudio:', error)
//     res.status(500).json('Erro ao transmitir áudio')
//   }
// }