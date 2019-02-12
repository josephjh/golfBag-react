import React from 'react';

const images = ["https://media.giphy.com/media/uKzR4CcYehBYc/giphy.gif", "https://adamsarson.files.wordpress.com/2014/06/tiger-stinger.gif", "https://adamsarson.files.wordpress.com/2015/03/couples-into-raes-creek.gif","https://media.giphy.com/media/7j0IQDjVURCH6/giphy.gif", "https://media.giphy.com/media/xT1XGKInNhr8guhD2g/giphy.gif", "https://media.giphy.com/media/3oEjHJZT3q9EdNEnAY/giphy.gif", "https://media.giphy.com/media/c6MvRXubX14DS/giphy.gif", "https://media1.tenor.com/images/55137d6cf43d28bc561b2f9522984be9/tenor.gif?itemid=11570091","https://i.imgur.com/kAlWHez.gif","https://3.bp.blogspot.com/-ZEpe2UiSTyI/VuCemtGWqqI/AAAAAAAAAuo/-xAeFU_MAFc/s1600/Jack_Nicklaus_13th_Hole_1986_Masters_2.gif","https://media.giphy.com/media/phajKPhwNxHr2/giphy.gif", "https://media0.giphy.com/media/M6ME53aNQFdNm/200w.webp?cid=3640f6095c61ee1e70662f4c599d0728", "https://media.giphy.com/media/EqPzhKqyccrwQ/giphy.gif"];

function Pictures(props) {

    return(
    <img src={images[props.index]} />
    )
}

export default Pictures