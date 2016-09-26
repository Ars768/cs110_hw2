	const star = function(starcounter){
		if (starcounter == 0){
			return "";
		}
		return "*"+ star(starcounter - 1);
  }
  const space =	function(spacecounter){
	if (spacecounter == 0){
		return "";  
		}
		return " " + space(spacecounter - 1);
  }
  
  const row = function(linecount){
    if (linecount == 0){
		return "";
		}
		return row(linecount-1) + "\n"+ space(rowcount-linecount) + star(2*linecount-1);
    
  }
  const rowcount = 5;
  console.log(row(rowcount));