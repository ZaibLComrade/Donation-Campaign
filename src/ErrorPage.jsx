import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen" id="error-page">
		<div className="text-center space-y-6 h-max w-max">
		  <h1 className="text-5xl">Oops!</h1>
		  <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
		  <p>
			<i className="opacity-60">{error.statusText || error.message}</i>
		  </p>
		</div>
    </div>
  );
}
