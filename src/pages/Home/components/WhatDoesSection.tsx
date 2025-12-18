export const WhatDoesSection = () => {
  return (
    <section className="py-10 bg-white text-primary">
      <div className="container mx-auto px-4">
          <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: "#a61042" }}>
        What does REACH Furniture PDS do?
      </h2>

        
        <div className="max-w-4xl mx-auto space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Manually making the patterns for furniture is a cumbersome, laborious and error prone process.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Any error in furniture patterns will lead to significant waste of time and resources in downstream processes in furniture creation process.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            In a competitive furniture market, the ability to develop new furniture products and get these to customers at the right time is critical to survive, grow and thrive.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            REACH Furniture PDS enables teams across design, prototyping, manufacturing and marketing in furniture creation to collaborate easily to ensure that accurate furniture patterns are made easily and fast.
          </p>

        </div>
      </div>
    </section>
  );
};

export default WhatDoesSection;