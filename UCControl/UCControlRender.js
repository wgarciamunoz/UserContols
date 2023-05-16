function UCControl($)
{
	this.show = function()
	{
		console.log(this.Size);
		var html = '<span>';
		html    +=  this.Propiedad;
		html    += '</span>';
		html    += '<H1>' + this.Size + '</H1>';
		this.setHtml(html);

		var myThis = this;
		console.log('myThis ' + myThis);
	}


}
