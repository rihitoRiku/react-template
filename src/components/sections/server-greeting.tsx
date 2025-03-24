async function getGreetingData() {
  // This could be a database call or API request
  // Server components can contain async code directly
  await new Promise((resolve) => setTimeout(resolve, 100)); // Simulating a delay
  return {
    greeting: "Hello from the server!",
    timestamp: new Date().toLocaleString(),
  };
}

export default async function ServerGreeting() {
  // Fetch data directly in the component
  const data = await getGreetingData();

  return (
    <div className="mb-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-900">
      <h2 className="mb-2 text-2xl font-bold">Hello Server!</h2>
      <p className="mb-2">{data.greeting}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Generated at: {data.timestamp}
      </p>
      <div className="mt-3 rounded bg-blue-100 p-2 text-xs dark:bg-blue-800">
        This component renders on the server and sends HTML to the client
      </div>
    </div>
  );
}
