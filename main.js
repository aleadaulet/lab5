function load() {
    let column_1=[5,5,5,3,2,8,8,7,7,8,1,4,8,6,7,10,4,6,8,10,4,7,5,5,7,3,3,8,3,2]
    sum_1=0;
    for (i=0;i<column_1.length;i++){
        sum_1=sum_1+column_1[i];
    }

    let column_2=[1,8,10,4,5,10,1,4,3,7,1,6,6,6,3,9,4,7,9,1,8,3,10,8,4,5,8,1,2,3];
    sum_2=0;
    for (i=0;i<column_2.length;i++){
        sum_2=sum_2+column_2[i];
    }

    let column_3=[66,41,68,95,96,91,53,47,68,63,92,58,55,70,48,71,50,87,41,81,41,56,66,81,55,46,77,55,75,58];
    sum_3=0;
    for (i=0;i<column_3.length;i++){
        sum_3=sum_3+column_3[i];
    }

    let column_4=[65,89,69,91,99,75,57,94,57,59,43,86,60,52,94,84,97,82,44,83,89,100,76,68,93,83,43,57,58,64];
    sum_4=0;
    for (i=0;i<column_4.length;i++){
        sum_4=sum_4+column_4[i];
    }
    let sums=[sum_1,sum_2,sum_3,sum_4];
    totalscore=sums[0]+sums[1]+sums[2]+sums[3];
    const result = {
        column1: column_1,	
	    column2: column_2,   	
	    column3: column_3,	
	    column4: column_4,	
	    sums: sums, 	// array of sums of each column
	    totalscore: totalscore,	// computed total score
    }
    console.log(result);

    /* alert ("SUM 1 = "+sum_1+", SUM 2 = "+sum_2+", SUM 3 = "+sum_3+", SUM 4 = "+sum_4+", Total Score = "+totalscore);*/
}