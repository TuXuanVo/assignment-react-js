import * as React from "react";
import { UserContextType, IUser } from "../@type/user";

export const UserContext = React.createContext<UserContextType | null>(null);

type ReactProps = {
	children: React.ReactNode;
};

const UserProvider: React.FC<ReactProps> = ({ children }) => {
	const [user, setUser] = React.useState<IUser>({
		name: "",
		email: "",
		password: "",
		rePassword: "",
		role: "",
		subcribe: false,
		acceptTerm: false,
	});

	const saveUser = (user: IUser) => {
		setUser(user);
	};

	const [email, setEmail] = React.useState<string>("");

	const saveEmail = (email: string) => {
		setEmail(email);
	};

	return (
		<UserContext.Provider value={{ user, email, saveUser, saveEmail }}>{children}</UserContext.Provider>
	);
};

export default UserProvider;
