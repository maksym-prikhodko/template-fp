import React, { lazy, Suspense } from "react";
import { RouteChildrenProps } from "react-router-dom";
const TemplateNameComponent = lazy(() => import("./TemplateName"));
interface ITemplateNamePageProps extends RouteChildrenProps {
	children?: never;
}
const LazyTemplateNamePage: React.FC<ITemplateNamePageProps> = (props) => (
	<Suspense fallback={null}>
		<TemplateNameComponent {...props} />
	</Suspense>
);
export default LazyTemplateNamePage;
