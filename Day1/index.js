// 
const EventEmitter = require("events")
const fs = require('fs');

const userEmitter = new EventEmitter()

const eventCount = {
   "LOGIN": 0,
   "LOGOUT": 0,
    "PURCHASE": 0,
    "PROFILE_UPDATE": 0,
}

const logFile = "eventlog.json" // 
if(!fs.existsSync(logFile)){
    const data = fs.readFileSync(logFile, "utf8");
    Object.assign(eventCount, JSON.parse(data));
}

function saveCount(eventCount){
    fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2));

}
userEmitter.on("LOGIN",(username)=>{
    eventCount.LOGIN++;
    console.log(`${username} logged in'✅`);
    saveCount()
})

userEmitter.on("LOGOUT",(username)=>{
    eventCount.LOGOUT++;
    console.log(`${username} logout successfully☑️`);
    saveCount()
})

userEmitter.on("PURCHASE",(username,item)=>{
    eventCount.PURCHASE++;
    console.log(`${username} purches${item}🛒`);
    saveCount()
})


userEmitter.on("PROFILE_UPDATE",(username,field)=>{
    eventCount.PROFILE_UPDATE++;
    console.log(`${username} upder their profile fields : ${field}`);
    saveCount()
})

userEmitter.on("SUMMARY",()=>{
    console.log("\n Event SUMMARY:");
    console.log(`Login ${eventCount.LOGIN}`);
    console.log(`LogOut ${eventCount.LOGOUT}`);
    console.log(`Purchased ${eventCount.PURCHASE}`);
    console.log(`Profile Update ${eventCount.PROFILE_UPDATE}`);
})


userEmitter.emit("LOGIN", "Saikat")
userEmitter.emit("LOGOUT", "Saikat");

userEmitter.emit("PURCHASE", "Saikat", "Laptop");

userEmitter.emit("PROFILE_UPDATE", "Saikat", "name");

userEmitter.emit("SUMMARY")

