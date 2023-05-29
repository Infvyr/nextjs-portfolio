import { AiOutlineLoading } from "react-icons/ai";

export function Loader({ textClassNames = "" }) {
	return (
		<div className="flex-center flex-col gap-5 ite">
			<div className="animate-spin ">
				<AiOutlineLoading size={30} />
			</div>
			<p className={textClassNames}>Loading...</p>
		</div>
	);
}
