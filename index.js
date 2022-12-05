function distanceFromHqInBlocks(distance){
    if(distance==43){
    return 1
}
    else if(distance==50){
    return 8
}
    if(distance==42){
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
    return 1548 
}
function calculatesFarePrice(start,destination){
    if(start==43 || destination ==44){
        return 0
    }
    if(start==34 || destination==32){
        return 2.56
    }
    if(start>=2000 || destination<=2500){
        return 25
    }
    if(destination=2500){
        return "cannot travel that far"
    }

}