import fs from 'node:fs'

// fs.readFile('hola.txt', 'utf-8', (err, data) => {
//     if(err) {
//         console.log('Error reading the archive:',err)
//         return
//     }

//     console.log('File content:', data)
// })

// const contenido = 'Hallo, Ich wohne in index.js'

// fs.writeFile('nuevo.txt', contenido, 'utf-8', (err) => {
//     if(err) {
//         console.log('Error reading the archive:',err)
//         return
//     }

//     console.log('Files written succesfully!')
// })

// fs.stat('hola.txt', (err, data) => {
//     if(err) {
//         console.log('Error reading file stats:',err)
//         return
//     }

//     console.log('file stats:', data.size, 'bytes')
// })

// fs.readdir('./', 'utf-8', (err, data) => {
//     if(err) {
//         console.log('Error reading the archive:',err)
//         return
//     }

//     console.log('File dir:', data)
// })

// fs.copyFile('hola.txt', 'hola_backup.txt', (err) => {
//     if(err) {
//         console.log('Error copying file:', err)
//         return
//     }

//     console.log('File copied succesfully')
// })

// fs.rename('hola_backup.txt', 'hola_backup2.txt', (err) => {
//     if(err) {
//         console.log('Error renaming file', err)
//         return
//     }

//     console.log('File renamed succesfully')
// })

// fs.mkdir('./carpeta_nueva2', (err) => {
//     if(err) {
//         console.log('Error creating directory', err)
//     }

//     console.log('Directory created successfully')
// })

// fs.unlink('hola_backup2.txt', (err) => {
//     if (err) {
//         console.log('Error deleting', err)
//     }

//     console.log('file removed successfully')
// })

// const watcher = fs.watch('nuevo.txt')

// watcher.on('change', (eventType, filename) => {
//     console.log('change:', eventType)
//     console.log('file:', filename)
// })

// const contenido2 = "\nHola soy otro texto desde index.js"

// fs.appendFile('nuevo.txt', contenido2, 'utf-8', (err) => {
//     if(err) {
//         console.log('Error appending to file:', err)
//     }

//     console.log('file appended succesfully')
// })

