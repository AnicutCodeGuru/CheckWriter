import { Component } from '@angular/core';


@Component({
  selector: 'check-writer',
  templateUrl: `./CheckWriter.html`,
})


export class CheckWriter{
  currency:number=null;
  inWords:string="";
    
  convertToWords(){

      if(isNaN(this.currency)){
        this.inWords="Invalid number";
        return ; 
      }

      let a =  ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];   
      let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
       
      let num = this.currency.toString().split(".")[0];
      let decimals =this.currency.toString().split(".").length>1?this.currency.toString().split(".")[1]:null;
      if(decimals){
        decimals=decimals.replace(/ /g,"");
        decimals=parseInt(decimals).toString()
      } 
      if(decimals!=null){ 
        decimals=decimals!=""?decimals+"/"+"100000000".substr(0,decimals.length+1):"";
      }else{
        decimals="";
      }


      
      
      if ((num = num.toString()).length > 9) return 'overflow';
      let n:any = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return; var str = '';
      str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
      str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
      str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
      str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
      str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
      
      this.inWords=(str+" "+decimals).split("").join("");
    }
}
