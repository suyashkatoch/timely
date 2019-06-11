/* 
    VERSION : 1.0.0

    Author  : Suyash Katoch
    Github  : suyashkatoch
    Twitter : suyashkatoch

*/
function timeSlotGenerator(start, end, interval){
    const yearIs  = new Date().getFullYear();
    const monthIs = new Date().getMonth() + 1;
    const dateIs  = new Date().getDate();
    const todayIs = `${yearIs}-${monthIs}-${dateIs}`;
    if(typeof(start) === "string" && typeof(end) === "string" && typeof(interval) === "string"){
        if(start.includes(":") && end.includes(":")){
            let str1 = `${todayIs} ${start}`;
            let str2 = `${todayIs} ${end}`;
            let startTime = new Date(str1).getTime() / 1000;
            const endTime = new Date(str2).getTime() / 1000;
            let timeSlotArr = [];
            while(startTime <= endTime){
                let currentTime = startTime;
                let nextTime = currentTime + parseInt(interval);
                let startTimeSlot = new Date(currentTime * 1000);
                let nextTimeSlot = new Date(nextTime * 1000);
                
                
                let startHours = startTimeSlot.getHours();
                if(startHours.toString().length < 2)
                    startHours = `0${startHours}`;
                
                let nextSlotHours = nextTimeSlot.getHours();
                if(nextSlotHours.toString().length < 2)
                    nextSlotHours = `0${nextSlotHours}`;
                    
                
                let startMinutes = startTimeSlot.getMinutes();
                if(startMinutes.toString().length < 2)
                    startMinutes = `${startMinutes}0`;
            
                let nextSlotMinutes = nextTimeSlot.getMinutes();
                if(nextSlotMinutes.toString().length < 2)
                    nextSlotMinutes = `${nextSlotMinutes}0`;
        
                let timeSlot = `${startHours}:${startMinutes} - ${nextSlotHours}:${nextSlotMinutes}`;
                timeSlotArr.push(timeSlot);
                startTime = startTime + parseInt(interval);
            }
            return timeSlotArr;
        }
        else{
            console.error("Argument(s) passed to timeSlotGenerator(type string, type string,  type string) should be of format hour(s):minute(s), it seems you are missing ':'");
            return false;    
        }
        
    }
    else{
        console.error("Argument(s) passed to timeSlotGenerator(type string, type string,  type string) are not of type string.");
        return false;
    }
}