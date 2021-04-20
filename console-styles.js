Object.defineProperty(console, "style", {
	"value": (value, style) => ({
		"data": [
			"%c" + value.replaceAll("%", "\%"),
			style
		],
		"join": function(value, style) {
			let data = this.data;
			let join = this.join;
			let go = this.go;
			let applyStyle = this.applyStyle;
			data.push(style === undefined ? data[data.length - 1] : style);
			data[0] += "%c" + value.replaceAll("%", "\%");
			return {
				"data": data,
				"join": join,
				"go": go,
				"applyStyle": applyStyle
			};
		},
		"go": function() {
			console.log(...this.data);
		},
		"applyStyle": function(style) {
			return this.join("", style);
		}
	}),
	"writable": true
});
