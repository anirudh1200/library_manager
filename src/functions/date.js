export const getDate = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();
	let date = yyyy + '-' + mm + '-' + dd;
	return date;
}

export const displayDate = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();
	let date = dd + '-' + mm + '-' + yyyy;
	return date;
}

export const getNextDate = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();
	if(parseInt(dd)>27){
		dd = "28";
	}
	if(mm === "12"){
		mm = "1";
		yyyy = toString(parseInt(yyyy) + 1);
	} else {
		mm = toString(parseInt(mm) + 1);
	}
	let date = yyyy + '-' + mm + '-' + dd;
	return date;
}

export const nextDue = nextIssue => {
	let today = new Date(getDate);
	if(nextIssue < today){
		return true;
	} else {
		return false;
	}
}