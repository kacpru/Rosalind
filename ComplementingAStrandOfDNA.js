/*
http://rosalind.info/problems/revc/
*/

const rna = "AGGCTCAATCGACTCCATTCGACCTAAGATCCCATCCGACTACGGTTTGTCAGATCTCCAGCGCGTGATCATAGGACATGTCGAGCCCAGAAGCGCACTTATCCCGAGGGATGAGATCCAGACCCTATCTAGAAACGATCGACATTCTCGCCTTTTTTAACTGTGGCCCCTATTCTGCCGGGGGAATCCATTTGGATTTTCCCAGTATATCAAATCTGCCTTACCGCCCTGTCATGGGCCTACAATAGTCTAGGCTGACCTACAGGCTTCACCGTGTCCCGGAGAGACCCGGGTACACACAGTACGCCTATATGTACCCAGCAAGTTTTTCCCTTTGAGAAGACTAGATCATGACTATCTTCAACTCTGCATTGGTTGCAGTCATCGATTAGACTCCATGACGGTTTCCACTTGCACGGGGGGGTTGCACAGCGTTGGGCACAGGCGGGTATTGACAGAGATAAGGACTTCTTCATCCGCGCACCCGGCCCTCCTTTACTATGTGCCAGCCCTTAGTTGATGTGCTAGTTAGGCGGTGTGTATCGTGGATAGACCATAGGCCGGGTTTGGTGTGGGTGTTAGCGCGATCAATGTCGTAACAGATCAGTGGGCGGGCCGCACAGGACCGCTAGGTCAGCCCGTTAATTCCCGTCCGACACAGGGTTAGAGCACATGCCTCTAGGGGGATATACAGATATAACCCTGACGAAGCCGTGGTGGCTGCTTAATTTGCAAGTCCGTCTAAAGCTCCTACCGGTTTTCGCAAGAGCTTCACTTGAAGGAAAGTTCCTGTCAATTGGGCCGACGGTCAACGTATAAAACCTTTAATAGACGCTTAGATTACTTCGTAACCCTATGCCAGGCATGCTTCTACTGTGCCGTTGGTATTGGCAACTGTCACAATTAAGGAGAAAGCCTACCTCATGAAGCTGAGAACTGTACTCCGCCCGAAGTTAGCTCGCATAGTTGAACGCTACTTCC";
const changeT = rna.replace(/T/g,"1",);
const changeA =  changeT.replace(/A/g,"2");
const changeC =  changeA.replace(/C/g,"3");
const changeG=  changeC.replace(/G/g,"4");
console.log(changeG);
const change1 = changeG.replace(/1/g,"A",);
const change2 =  change1.replace(/2/g,"T");
const change3 =  change2.replace(/3/g,"G");
const change4=  change3.replace(/4/g,"C");
console.log(change4);
console.log(change4.split('').reverse().join(''));
console.log(change4.split(''));
