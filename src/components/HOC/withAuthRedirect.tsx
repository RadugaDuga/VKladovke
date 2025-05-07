//@ts-nocheck
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/redux-store";

export function withAuthRedirect<P>(Component: ComponentType<P>) {
	const RedirectComponent: React.FC<P> = (props) => {
		const isAuth = useSelector((state: RootState) => state.auth.isAuth);
		if (!isAuth) return <Navigate to="/login" />;
		return <Component {...props} />;
	};
	RedirectComponent.displayName = `withAuthRedirect(${
		Component.displayName || Component.name || "Component"
	})`;
	return RedirectComponent;
}
