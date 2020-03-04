//  http://rosalind.info/problems/iev/

const AA_AA=17232;
const AA_Aa=19186;
const AA_aa=16564;
const Aa_Aa=16557;
const Aa_aa=19097;
const aa_aa=18527;

const newAA_AA=AA_AA*2;
const newAA_Aa=AA_Aa*2;
const newAA_aa=AA_aa*2;
const newAa_Aa=Aa_Aa*2;  //*0,75
const newAa_aa=Aa_aa*2; //*0,50
const newaa_aa=aa_aa*2;

console.log(newAA_AA+newAA_Aa+newAA_aa+(newAa_Aa*0.75)+(newAa_aa*0.5))

