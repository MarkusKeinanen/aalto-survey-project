import { LandingLayout } from 'components/Landing/LandingLayout.jsx';
import { Login } from 'components/Landing/Login';

export default function Home() {
	return (
		<LandingLayout>
			<Login />
		</LandingLayout>
	);
}
