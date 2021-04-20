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
			let joinStyle = this.joinStyle;
			data.push(style === undefined ? data[data.length - 1] : style);
			data[0] += "%c" + value.replaceAll("%", "\%");
			return {
				"data": data,
				"join": join,
				"go": go,
				"applyStyle": applyStyle,
				"joinStyle": joinStyle
			};
		},
		"go": function() {
			console.log(...this.data);
		},
		"applyStyle": function(style) {
			return this.join("", style);
		},
		"joinStyle": function(style) {
			return this.applyStyle(style + " " + this.data[this.data.length - 1])
		}
	}),
	"writable": true
});
