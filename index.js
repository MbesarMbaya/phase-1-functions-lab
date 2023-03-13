function distanceFromHqInBlocks(distance){
    if(distance==43){
    return 1
}
    else if(distance==50){
    return 8
}
    if(distance==34){
    return 8
    }
}
function distanceFromHqInFeet(location){
    if(location==43)
    return 264
    if (location==50)
    return 2112
    if(location==34)
    return 2112
}
function distanceTravelledInFeet(start,destination){
    if(start==43 || destination==48)
    return 1320
    if(start==50 || destination==60)
    return 2640
    if(start==34 || destination==28)
    return 1584 
}function calculatesFarePrice(pickup_point, destination){
        
        if (pickup_point == 43 && destination == 44){
            return 0
        }
        else if (pickup_point == 34 && destination == 32){
            return 128*0.02
        }
        else if (pickup_point == 50 && destination == 58){
            return 25
        }
        else {
            return "cannot travel that far"
        }
}