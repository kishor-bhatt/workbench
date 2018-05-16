var seats = [
    {'id':0,'price':1000,'type':'booked'},
    {'id':1,'price':1000,'type':'booked'},
    {'id':2,'price':1000,'type':'booked'},
    {'id':3,'price':1000,'type':'booked'},
    {'id':4,'price':1000,'type':'booked'},
    {'id':5,'price':1000,'type':'booked'},
    {'id':6,'price':1000,'type':'booked'},
    {'id':7,'price':1000,'type':'booked'},
    {'id':8,'price':1000,'type':'booked'},
    {'id':9,'price':1000,'type':'booked'},
    {'id':10,'price':1000,'type':'booked'},
    {'id':11,'price':1000,'type':'booked'},
    {'id':12,'price':1000,'type':'booked'},
    {'id':13,'price':1000,'type':'booked'},
    {'id':14,'price':1000,'type':'booked'},
    {'id':15,'price':1000,'type':'booked'}
];

var body = document.body;
var parentContainer = document.createElement('div');
parentContainer.setAttribute('id','parentContainer');
var container = document.createElement('div');
container.setAttribute('id','container');
var detailsDiv = document.createElement('div');
detailsDiv.setAttribute('id','detailsDiv');
var leftSide = document.createElement('div');
leftSide.setAttribute('id','leftSide');
var rightSide = document.createElement('div');
rightSide.setAttribute('id','rightSide');
parentContainer.appendChild(container);
parentContainer.appendChild(detailsDiv);
body.appendChild(parentContainer);
container.appendChild(leftSide);
container.appendChild(rightSide);

// var leftSide = document.getElementById('leftSide');
// var rightSide = document.getElementById('rightSide');
var leftRow,rightRow,leftSeatDiv,rightSeatDiv;
var rowsCount = seats.length/4;
var leftIndex = 0;
var rightIndex = seats.length/2;

for(var row = 0; row < rowsCount; row++){
    leftRow = document.createElement('div');
    rightRow = document.createElement('div');
    leftRow.setAttribute('class','disp-block');
    rightRow.setAttribute('class','disp-block');

    for(var i=0;i<2;i++) {
        leftSeatDiv = document.createElement('div');
        leftSeatDiv.id = seats[leftIndex].id;
        leftSeatDiv.setAttribute('onclick','getseatDetails('+leftSeatDiv.id+')');
        leftSeatDiv.setAttribute('class','seatDiv');
        leftRow.appendChild(leftSeatDiv);
        leftSeatDiv = null;
        ++leftIndex;
    
        rightSeatDiv = document.createElement('div');
        rightSeatDiv.id = seats[rightIndex].id;
        rightSeatDiv.setAttribute('onclick','getseatDetails('+ rightSeatDiv.id +')');
        rightSeatDiv.setAttribute('class','seatDiv');
        rightRow.appendChild(rightSeatDiv);
        rightSeatDiv = null;
        ++rightIndex;
    }

    leftSide.appendChild(leftRow);
    rightSide.appendChild(rightRow);
    leftRow = null;
    rightRow = null;
}

// container.appendChild(leftSide);
// container.appendChild(rightSide);

function getseatDetails(seatId) {
    var details = document.getElementById('detailsDiv');
    details.innerHTML = '';
    var span = document.createElement("span");
    var text = document.createTextNode('id:'+ (seats[seatId].id.valueOf() + 1) +',price:'+seats[seatId].price +',type:'+seats[seatId].type);

    span.appendChild(text);
    details.appendChild(span);
}