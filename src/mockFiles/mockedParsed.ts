var favorite_output = "<table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th>";
favorite_output += "<br><tr><td>Owen</td><td>2</td><td>CS</td><td>Cleveland</td>";
favorite_output += "<br><tr><td>Dylan</td><td>2</td><td>APMA-CS</td><td>Boston</td>";
favorite_output += "<br><tr><td>Julia</td><td>2</td><td>Classics</td><td>Providence</td>";
favorite_output += "<br><tr><td>Emily</td><td>4</td><td>Acting</td><td>London</td></table>";


var noHeadStu_output= "<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>";
noHeadStu_output += "<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td>";
noHeadStu_output += "<br><tr><td>Emily</td><td>4</td><td>Classics</td><td>Providence</td>";
noHeadStu_output += "<br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table>";

var multiStu_output= "<table style= width:100%><br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>";
multiStu_output += "<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td>";
multiStu_output += "<br><tr><td>Dylan</td><td>4</td><td>Classics</td><td>Providence</td>";
multiStu_output += "<br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table>";

var multiStuHead_output = "<table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th>";
multiStuHead_output += "<br><tr><td>Dylan</td><td>2</td><td>CS</td><td>Cleveland</td>";
multiStuHead_output += "<br><tr><td>Julia</td><td>2</td><td>Acting</td><td>London</td>";
multiStuHead_output += "<br><tr><td>Dylan</td><td>4</td><td>Classics</td><td>Providence</td>";
multiStuHead_output += "<br><tr><td>Owen</td><td>3</td><td>APMA-CS</td><td>Boston</td></table>";


var empty_output = "(This CSV file is empty)";

var headEmpty_output = "<table style= width:100%><br><th>Name</th><th>Year</th><th>Concentration</th><th>Hometown</th></table>";

export {favorite_output, noHeadStu_output, multiStu_output, multiStuHead_output, empty_output, headEmpty_output};