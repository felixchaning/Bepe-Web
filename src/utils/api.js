const HOST_URI = 'https://api.behance.net/v2/',
      CLIENT_ID = 'LmRY3Dfb5xwx8bXXpXEscAhmXlW7ZGT6',
      GET_PROJECTS = 'projects';

let Api = {};

// let _obj2uri = (obj) => {
// 	return Object.keys(obj).map(function (k) {
// 		return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
//  	}).join('&');
// }

let _getProjects = () => {
	return HOST_URI + GET_PROJECTS + '?' + 'client_id=' +CLIENT_ID;
}


export default Api = {
	getProjects : _getProjects,
	getFlickr: 'http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?'
}