import choffers_info from './choffers.json';

const getChoffer = () => {
    /*
    let i = Math.floor(Math.random() * 2)
    return choffers[keys[i]];
     */
    console.log('Get choffer index')
    const keys = Object.keys(choffers_info);
    let choffers = []
    for (let key of keys){
        choffers.push(choffers_info[key])
    } 
    let date = new Date()
    let UTCHour = date.getUTCHours();
    let hour = UTCHour > 23 & UTCHour == 0 ? 1 : UTCHour + 1;
    let choffer = choffers.filter((choffer) => {
        if (choffer.availability[1] < choffer.availability[0]){ 
          return ((choffer.availability[0] <= hour) && (hour <=24)) || ((hour >=0 ) && (choffer.availability[1] > hour))
        } else{
          return (choffer.availability[0] <= hour) && (choffer.availability[1] > hour)
        }  
    })
    return choffer[0]
}

export default getChoffer;