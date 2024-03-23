// OS

//const os = require("os")

//import os from "os"

//console.log(os.platform())
//console.log(os.arch())
//console.log(os.totalmem())
//console.log(os.freemem())
//console.log(os.userInfo())

// path

//const path = require("path")
import {dirname, isAbsolute, join, resolve, basename, extname, parse, format} from "path"
import { fileURLToPath } from "url"

const _filename = fileURLToPath(import.meta.url)

const _dirname = dirname(_filename)

const joinedPaths = join('archivos', 'txt', 'file.txt')
const resolvedPaths = resolve('archivos', 'txt', 'file.txt')

console.log(basename(_filename))
console.log(basename(_dirname))
console.log(extname(_filename))
console.log(extname(_dirname))
console.log(parse(_filename))
console.log(parse(_dirname))
console.log(format(parse(_filename)))
console.log(format(parse(_dirname)))

console.log("----")
console.log(join('archivos', 'txt', 'file.txt'))
console.log(join('/archivos', '//txt', 'file.txt'))
console.log(join('/archivos', '//txt', '../file.txt'))