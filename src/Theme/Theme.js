import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  hfontSize: {
    xxl: "40px",
    xl: "36px",
    lg: "26px",
    md: "24px",
    sm: "22px",
    xs: "18px",
  },
  fontSize: {
    xxxl: "22px",
    xxl: "20px",
    xl: "18px",
    lg: "16px",
    md: "14px",
    sm: "12px",
    xs: "10px",
  },
  fontColor: {
    default: "#000000",
    secondary: "#777E90",
    label: "#B1B5C3",
    success: "#45b26b",
    white: "#FFFFFF",
    light: "#FCFCFD",
    gray: "#D3D3D3",
    primary: "#8F59E8",
    blue: "#3772FF",
    danger: "#FF1E1E",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    bold: 600,
    bolder: 700,
    boldest: 900,
  },
  fontFamily: {
    text: "poppins",
    heading: "madeOuterSans",
    input: "inter",
  },
  borderRadius: {
    full: "1000px",
    xxl: "12px",
    xl: "8px",
    lg: "6px",
    md: "4px",
    sm: "2px",
    no: "0px",
  },
  spaces: {
    xxl: "75px",
    xl: "55px",
    lg: "35px",
    md: "22px",
    sm: "12px",
    no: "0px",
  },
  backgroundColor: {
    trans: "transparent",
    primary: "#8F59E8",
    dark: "#1D1D3C",
    white: "#FFFFFF",
    light: "#FDFDFD",
    gray: "#D3D3D3",
    secondary: "#F4F5F6",
    success: "#45b26b",
    blue: "#3772FF",
    danger: "#F10909",
  },
  borderColor: "#E6E8EC",
};

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		scroll-behavior: smooth;
	}
	*:focus-visible {
		outline: 0px;
	}
	img{
		max-width:100%;
	}
	body {
		color: ${(props) => props.theme.fontColor.default};
		font-family:${(props) => props.theme.fontFamily.text};
	}
	*::-webkit-scrollbar {
		width: 5px;
   		height: 0px;
	}

	*::-webkit-scrollbar-track {
		background-color: transparent;
	}

	*::-webkit-scrollbar-thumb {
		background-color: darkgrey;
		border-radius: 20px;
	}
	p{
		margin-bottom: 0px;
	}


	h1,h2,h3,h4,h5,h6{
		font-family:${(props) => props.theme.fontFamily.heading};
		margin:0px;
	}
	.product-img-container{
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.relative {
		position: relative;
	}
	.absolute {
		position: absolute;
	}
  
	.offcanvas-start {
		width: 326px;
		z-index: 1050;
	}	
	.offcanvas-end {
		width: 326px;
		z-index: 1050;
	}
    
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}
	select, option {
		-webkit-appearance: none;
	}
	.selectDropIcon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
	input{
		-webkit-appearance: none;
	}
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}

	

	/* Firefox */
	input[type=number] {
	-moz-appearance: textfield;
	}
	.ql-editor {
    color:${({ theme }) => theme.fontColor["secondary"]}
}
	.checkbox-filter{
		input {
			width: 24px;
			height: 24px;
			border-radius: 4px;
		}
	}
	.gap-10{
		gap: 10px;
	}
	.gap-20{
		gap: 20px;
	}
	.gap-30{
		gap: 30px;
	}
	.gap-40{
		gap: 40px;
	}
.right-10{
	right: 10px;
}
	.container{
		padding-left: 24px;
		padding-right: 24px;
	}
	.border-bottom{
		border-bottom-color: ${({ theme }) => theme.borderColor} !important;
	}
	.rotate-180{
		transform: rotate(180deg);
	}
	.rotate-90{
		transform: rotate(-90deg);
	}
	.grid{
		display: grid;
	}
	.grid-cols-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.grid-cols-3{
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
	.all-flex{
		div{display:flex;}
	}
	.grid-cols-4 {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	.grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
}
	.grid-cols-12 {
    	grid-template-columns: repeat(12, minmax(0, 1fr));
	}

	.col-span-3 {
    	grid-column: span 3 / span 3;
	}
	.col-span-4 {
    grid-column: span 4 / span 4;
}
	.col-span-6 {
    grid-column: span 6 / span 6;
}
	.col-span-9 {
		grid-column: span 9 / span 9;
	}
	.cursor-pointer{
		cursor:pointer;
	}
	.uppercase{
		text-transform: uppercase;
	}
	button:active ,button:focus{
		outline: 0px;
	}
	input:focus-visible {
		outline: 0px;
	}
	.object-cover{
		object-fit: cover;
	}
	
	.error-field {
	border-color: #ff1e1e !important;
	}
	.offcanvas-header{
		padding: 24px !important;
	}
	.offcanvas-body{
		padding: 24px !important;
	}
	.form-container{
		max-width: 825px;
	}
	.form-error {
	color: #ff1e1e;
	font-family: poppins;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 21px;

	letter-spacing: 0.01em;
	}
	.productImage{
		object-fit: contain;
		width: 100%;
		height: auto;
		max-width: 100%;
		max-height: 100%;
		border-radius: 0px;
	}
	.top-80{
		top: 80px;
	}
	.left-0{
		left:0;
	}	
	.scale-0{
		transform: translateY(-100%);
	}	
	.scale-100{
		transform: translateY(0%);
	}
	
	.duration-100{
		transition-duration: 100ms;
	}
	.duration-200{
		transition-duration: 200ms;
	}
	.duration-300{
		transition-duration: 300ms;
	}
	.duration-400{
		transition-duration: 400ms;
	}
	.ease-in{
		transition-timing-function: ease-in;
	}
	.ease-in-out{
		transition-timing-function: ease-in-out;
	}
	.ease-out{
		transition-timing-function: ease-out;
	}
	.opacity-0{
		opacity: 0;
	}
	.opacity-100{
		opacity: 1;
	}
	.translateY100{
		transform: translateY(100%);
	}
	.translateY-100{
		transform: translateY(-100%);
	}
	.translateY0{
		transform: translateY(0px);
	}
	.translateX100{
		transform: translateX(100%);
	}
	.translateX-100{
		transform: translateX(-100%);
	}
	.translateX0{
		transform: translateX(0px);
	}
	.rounded-bottom-drawer{border-radius: 12px 12px 0px 0px;}
	/* tab and lower */
	@media (max-width: 992px) { 
		.container{
			max-width: 100%;
		}
	}
	/* tab and higher */

	@media (min-width: 768px) { 
	.grid-cols-md-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.grid-cols-md-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.grid-cols-md-3{
			grid-template-columns: repeat(3,minmax(0,1fr));
		}
		.grid-cols-md-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
		.grid-cols-md-10 {
		grid-template-columns: repeat(10, minmax(0, 1fr));
		}
		.grid-cols-md-12 {
			grid-template-columns: repeat(12, minmax(0, 1fr));
		} 
}

@media (min-width: 992px) { 
	.grid-cols-lg-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.grid-cols-lg-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.grid-cols-lg-3{
		grid-template-columns: repeat(3,minmax(0,1fr));
	}
	.grid-cols-lg-4 {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	.grid-cols-lg-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
	}
	.grid-cols-lg-12 {
    	grid-template-columns: repeat(12, minmax(0, 1fr));
	} 
	}

`;
