function Submit() {
    let input = parseInt(document.getElementById("inp").value);
        switch (input ) {
            case 1:
                document.getElementById("pri").innerHTML = "Thang 1 co 31 ngay";
                break;
            case 2:
                document.getElementById("pri").innerHTML = "Thang 2 co 28 ngay";
                break;
            case 3:
                document.getElementById("pri").innerHTML = "Thang 3 co 31 ngay";
                break;
            case 4:
                document.getElementById("pri").innerHTML = "Thang 4 co 30 ngay";
                break;
            case 5:
                document.getElementById("pri").innerHTML = "Thang 5 co 31 ngay";
                break;
            case 6:
                document.getElementById("pri").innerHTML = "Thang 6 co 30 ngay";
                break;
            case 7:
                document.getElementById("pri").innerHTML = "Thang 7 co 31 ngay";
                break;
            case 8:
                document.getElementById("pri").innerHTML = "Thang 8 co 31 ngay";
                break;
            case 9:
                document.getElementById("pri").innerHTML = "Thang 9 co 30 ngay";
                break;
            case 10:
                document.getElementById("pri").innerHTML = "Thang 10 co 31 ngay";
                break;
            case 11:
                document.getElementById("pri").innerHTML = "Thang 11 co 30 ngay";
                break;
            case 12:
                document.getElementById("pri").innerHTML = "Thang 12 co 31 ngay";
                break;
            default:
                alert("wrong")
        }

}