const {app,BrowserWindow,Menu} = require('electron')
const path = require('path')
const url = require('url') 
//



let win 

function CreateWindow() {
    win = new BrowserWindow({width:800,height:200})
    win.loadURL(url.format({
        pathname:path.join(__dirname,'main.html'),
        protocol:'file',
        slashes:true
    }))

    win.on('close',() =>{
        win = null
    })
    //

    //win.openDevTools()
}

app.on('ready',CreateWindow)

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if (win == null){
        CreateWindow()
    }
})

