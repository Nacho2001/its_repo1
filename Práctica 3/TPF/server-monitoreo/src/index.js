//Invoco los servicios necesarios

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const enrutador = require('./routes/clientes.route')
const socketio = require('socket.io')
const os = require('node-os-utils')
const cpu = os.cpu
const mem = os.mem
//const drive = os.drive
const netstat = os.netstat
const oss = os.os
const nodeDiskInfo = require('node-disk-info');

//Consigo las funciones de express en "server"
const server = express()

//Especifico el uso del formato JSON
server.use(express.json())

//Utilizo el cors para la comunicar al cliente y al servidor
server.use(cors())

//Para notificar en consola cuando realice una petición
server.use(morgan('dev4'))

//Puerto que voy a utilizar: 5000
server.set('port', process.env.PORT || 5000)

//Busca "port" e inicia el servidor
server.listen(server.get('port'))

//Busca y utiliza las rutas
server.use(enrutador)

//muestra el mensaje de inicio del servidor por consola
console.log(`Servidor puesto en marcha en el puerto ${server.get('port')}`)

//El socket utilizará un puerto diferente al de la api: 5020
server.set('port2', process.env.PORT || 5020)

const servidor2 = server.listen(server.get('port2'), () => {
   console.log('Servicio socket iniciado con éxito en el puerto 5020')
});

const io = socketio(servidor2)

io.on('connection', (socket) => { // Datos del CPU, los que no tienen setInterval no hace falta emitirlos segundo a segundo ya que son constantes
    setInterval(() => {
        cpu.usage()
        .then((info) => {
            socket.emit('cpu-usage',
            {
                data: info
            })
        })
    },1000)

    setInterval(() => {
        cpu.free()
        .then((info) => {
            socket.emit('cpu-free',
            {
                data: info
            })
        })
    },1000)

    const cpu_count = cpu.count()

    socket.emit('cpu-count',
    {
        data: cpu_count
    })

    const cpu_model = cpu.model()
   
    socket.emit('cpu-model',
    {
        data: cpu_model
    })
    

    //Datos de DRIVE (funciona en linux)
    /*setInterval(() => {
        drive.info()
        .then((info) => {
            socket.emit('drive',
            {
                utilizado: info.usedGb,
                libre: info.freeGb,
                l_porcentaje: info.freePercentage,
                total: info.totalGb
            })
        })
    },1000)*/

    //Datos de DRIVE (Node-disk-info) Muestra los datos del disco en Windows
    const disk = nodeDiskInfo.getDiskInfoSync()
    socket.emit('drive',
    {
        utilizado: (disk[0].used) / 1073741824, //Apunto al elemento 0 del array, que es el disco local del dispositivo
        libre: (disk[0].available) / 1073741824,
        porcentaje: disk[0].capacity,
        total: (disk[0].blocks) / 1073741824
    })

    //Datos de MEMORY
    setInterval(() => {
        mem.free()
        .then((info) => {
            socket.emit('mem-free',
            {
                total: info.totalMemMb,
                libre: info.freeMemMb
            })
        })
    },1000)

    setInterval(() => {
        mem.used()
        .then((info) => {
            socket.emit('mem-used',
            {
                utilizada: info.usedMemMb
            })
        })
    },1000)

    //NETSTAT
    setInterval(() => {
        netstat.inOut()
        .then((info) => {
            socket.emit('netstat-eth0', //Apunto al elemento 1, correspondiente a la interfaz eth0
            {
                input: info[1].inputMb,
                output: info[1].outputMb
            })
        })
    },1000)

    setInterval(() => {
        netstat.stats()
        .then((info) => {
            socket.emit('netstat-lo', //Apunto al elemento 0, correspondiente a la interfaz lo
            {
                input: info[0].inputBytes,
                output: info[0].outputBytes
            })
        })
    },1000)

    //Datos de OS
    const oos = oss.type()
    
    socket.emit('os-oos',
    {
        data: oos,
        name:'OS OOS'
    })

    const hostname = oss.hostname()
    socket.emit('os-hostname',
    {
        data: hostname,
        name:'OS HOSTNAME'
    })

    const os_arch = oss.arch()
    socket.emit('os-arch',
    {
        data: os_arch,
        name: 'OS ARCH'
    })
})