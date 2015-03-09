// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation=new Array() // do not change this!

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "Talk is cheap. Show me the code.";
Quotation[1] = "You've baked a really lovely cake, but then you've used dog shit for frosting.";
Quotation[2] = "How you look at it is pretty much how you'll see it";
Quotation[3] = "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.";

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
document.write(Quotation[whichQuotation]);