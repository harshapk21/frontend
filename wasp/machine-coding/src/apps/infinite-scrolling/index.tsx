import { useState, useEffect, useRef } from "react";

export default function InfiniteScrollingIO() {
  const [data, setData] = useState<Array<number>>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null); // Use ref for the loader element

  const fetchData = async () => {
    if (loading) return; // Prevent duplicate API calls while loading
    setLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}&select=title`
      );
      const data2 = await res.json();
      setData((prev) => [...prev, ...data2.products]);
      setPage((prevPage) => prevPage + 1);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  // Intersection Observer setup
  /**
   * Its important to have IO Setup in useEffect and not in general component body for mainly 2 v.imp reason.
   * 1) If placed on body , on every re-render a new IO instance is created and we don't have a way to disconnect leading to memeory leaks but if we have the 
   * useEffect in place , multiple instances are still created but we have a way to clean-up(disconnect & unobserve) in next render cycle as part of return
   * 2) Dynamically add observable element to the IO by creating new instance based on data availability [controlled by dep array state variable v.imp]
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loading) {
          console.log(data,entry, "entry");
          fetchData();
        }
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0.5 } 
      /**
       * Use number(0-1) for threshold
       * rootMargin for exapnding the trigger area , adds imaginary margin(positive margin expand trigger area while negative margins shrink)
       * root: null(by default root/viewport) but you can add custom parent container with scroll enabled (can be useful with sidenav scrolls etc etc)
       * */
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      console.log('clean')
      if (loaderRef.current) observer.unobserve(loaderRef.current);
      observer.disconnect(); // Cleanup
    };
  }, [data]); // Explore why loading & why not data

  return (
    <>
      {data?.length ? (
        <>
          {data.map((d, index) => (
            <div
              key={index} // Avoid index as key if data has unique IDs
              style={{
                height: "100px",
                width: "100px",
                border: "1px solid black",
              }}
            >
              {d.title}
            </div>
          ))}
          {loading && <div>...loading</div>}
        </>
      ) : null}
      {data.length && !loading && <div ref={loaderRef}></div>}
      {/* empty div as observable helping with no layout change impact */}
    </>
  );
}
