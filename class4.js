var Maths = +prompt('Enter Maths Marks')
var Eng = +prompt('Enter Eng Marks')
var Isl = +prompt('Enter Isl Marks')
var Bio = +prompt('Enter Bio Marks')
var Phy = +prompt('Enter Phy Marks')
var Total = Maths + Eng + Isl  + Bio + Phy
var Perc = ( Total / 500) * 100

var Grade;

if (Perc >= 80 && Perc < 101 ) {
    Grade = 'A+'
} 
else if ( Perc >= 70 ) {
    Grade = 'A'
}
else if ( Perc >= 60 ) {
    Grade = 'B'
}
else if ( Perc >= 50 ) {
    Grade = 'C'
}
else if ( Perc >= 40 ) {
    Grade = 'D'
}
else  {
    Grade = 'F'
}

document.write(
    `<table border= "2px"> 
    <tr> 
    <th> Maths </th>
    <th> English </th>
    <th> Isl </th>
    <th> Bio </th>
    <th> Physics </th>
    <th> Total </th>
    <th> Percentage </th>
    <th> Grade </th>
    </tr>
    <tr>
    <td> ${Maths} </td>
    <td> ${Eng} </td>
    <td> ${Isl} </td>
    <td> ${Bio} </td>
    <td> ${Phy} </td>
    <td> ${Total} </td>
    <td> ${Perc.toFixed(2)} </td>
    <td> ${Grade} </td>
    </tr>
    </table>`
)