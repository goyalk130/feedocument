export default function getsize(count){
    let percent = "100%"
    switch (count){
        case 0:
            percent="100%";
            break;
        case 1:
            percent="99%";
            break;
        case 2:
            percent="95%";
            break;
        case 3:
            percent="91%";
            break;
        case 4:
            percent="87%";
            break;
        case 5:
            percent="83%";
            break;
        case 6:
            percent="79%";
            break;
        case 7:
            percent="75%";
            break;
        case 8:
            percent="71%";
            break;
        case 9:
            percent="67%";
            break;
        default:
            percent="63%"
    }
    return percent;
}