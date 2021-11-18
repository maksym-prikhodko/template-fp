import React from "react";
import styles from "./TemplateName.module.scss";
interface ITemplateNameProps {}
const TemplateName: React.FC<ITemplateNameProps> = ({ children }) => {
	return (
		<div
			className={styles["TemplateName"]}
			data-test-id="TemplateName--component"
		>
			<h1>TemplateName component</h1>
		</div>
	);
};
export default TemplateName;
