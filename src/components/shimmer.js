import ShimmerCard from "./shimmerCard";

const Shimmer = () => {
  return (
    <div className="shimmer">
      {[...Array(10)].map(() => {
        return <ShimmerCard />;
      })}
    </div>
  );
};

export default Shimmer;
