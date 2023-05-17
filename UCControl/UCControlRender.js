function UCControl($)
{

	this.SetDropDownData = function(data)
	{
		this.DropDownData = data;
	}

	this.GetDropDownData = function()
	{
		return this.DropDownData;
	}

	this.show = function()
	{
		console.log(this.DropDownData.id);
		var html = '<span>';
		html    +=  this.Propiedad;
		html    += '</span>';
		html    += '<H1>' + this.Size + '</H1>';
		this.setHtml(html);

		var myThis = this;
		console.log('myThis ' + myThis);
	}


}
