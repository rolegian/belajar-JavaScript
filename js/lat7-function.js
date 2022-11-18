
function jmlVolDuaKubus(a,b){
    var total, volumeA, volumeB;
    volumeA = a*a*a;
    volumeB= b*b*b;
    total= volumeA+volumeB;
    return total;
}

console.log(jmlVolDuaKubus(8,3));