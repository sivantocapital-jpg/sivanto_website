const demoImages = {
  business: "/assets/demobusiness.png",
  ecommerce: "/assets/demoecom.png",
  portfolio: "/assets/demoportfo.png",
  school: "/assets/demoschool.png",
};

export default async function DemoPage({ params }) {
  const { slug } = await params;

  const image = demoImages[slug];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {image ? (
        <img
          src={image}
          alt={slug}
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      ) : (
        <h1>Demo Not Found</h1>
      )}
    </div>
  );
}