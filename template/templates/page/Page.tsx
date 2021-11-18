import React from "react";
import { RouteChildrenProps } from "react-router-dom";
import styles from "./TemplateName.module.scss";
interface ITemplateNamePageProps extends RouteChildrenProps {
	children?: undefined;
}
const TemplateNamePage: React.FC<ITemplateNamePageProps> = ({
	children,
	history,
	location,
	match,
}) => {
	return (
		<div className={styles["TemplateName"]} data-test-id="TemplateName--page">
			<h1>TemplateName page</h1>
		</div>
	);
};
export default TemplateNamePage;
