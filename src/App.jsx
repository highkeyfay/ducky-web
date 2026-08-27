import "./index.css";
import { motion } from "motion/react";

function App() {
	return (
		<>
			<motion.div
				id="ducky-svg"
				className="size-70"
				animate={{ rotate: 360 }}
				transition={{ duration: 4, ease: "linear", repeat: Infinity }}
			>
				<svg
					viewBox="0 0 100 100"
					id="ducky-svg"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs id="defs6" />
					<g
						transform="matrix(1.0674918,0,0,1.1224273,50,51.631653)"
						fill="#ff0000"
						id="icon-group"
						strokeWidth="0.913563"
					>
						<rect
							x="-10"
							y="-46"
							width="20"
							height="46"
							id="rect1"
							strokeWidth="0.913563"
						/>
						<rect
							x="-10"
							y="-46"
							width="20"
							height="46"
							transform="rotate(72)"
							id="rect2"
							strokeWidth="0.913563"
						/>
						<rect
							x="-10"
							y="-46"
							width="20"
							height="46"
							transform="rotate(144)"
							id="rect3"
							strokeWidth="0.913563"
						/>
						<rect
							x="-10"
							y="-46"
							width="20"
							height="46"
							transform="rotate(-144)"
							id="rect4"
							strokeWidth="0.913563"
						/>
						<rect
							x="-10"
							y="-46"
							width="20"
							height="46"
							transform="rotate(-72)"
							id="rect5"
							strokeWidth="0.913563"
						/>
					</g>
				</svg>
			</motion.div>
			<h1 className="font-thunder">ducky</h1>
		</>
	);
}

export default App;
