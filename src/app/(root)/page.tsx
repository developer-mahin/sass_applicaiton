import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Page page</h2>
      <UserButton />
    </div>
  );
};

export default HomePage;
