function add()
{


	//console.log("Arguments are ",arguments.length);

	var sum = 0;

	for(let i = 0; i<arguments.length; i++)
	{


		if(typeof arguments[i]==="function"){


			arguments[i] = arguments[i]();

		}

		 if(typeof arguments[i]==="object" && arguments[i] instanceof Array) {

			 //sum += arguments[i][0]+arguments[i][1];
			var t =0; 

			for(let j=0; j<arguments[i].length;j++)
			{
				t+= arguments[i][j];
			}

			arguments[i]=t;

		}


		sum +=isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]);


	}



	return sum;


}