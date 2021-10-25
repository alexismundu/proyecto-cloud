/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  *
  */
 function main(params) {
    if(!params.log_text)
        return Promise.reject({error:'No log text has been provided'})

	return { 
	    doc:{
	        log:params.log_text,
	        date: new Date()
	    }
	};
}
