const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-e6f6a5">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          style={{ color: "#a61042" }}
        >
          Who is REACH Furniture PDS for?
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
          REACH Furniture PDS fits best wherever furniture parts need to be accurately patterned,
          standardized, and optimized for material and time savings.
        </p>

        <div className="max-w-5xl mx-auto space-y-10 text-gray-700 text-lg">

          {/* Panel Furniture */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Panel furniture manufacturers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Factories producing modular kitchens, wardrobes, office workstations, and storage using boards, laminates, and foams where precise pattern development is critical for CNC and manual cutting.</li>
              <li>Plants running high model and size variety that need parametric or template-based patterns to reduce rework and sampling time.</li>
            </ul>
          </div>

          {/* Upholstered Furniture */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Upholstered furniture manufacturers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sofa, recliner, chair, and mattress manufacturers who must design and modify fabric, leather, foam, and lining patterns frequently.</li>
              <li>Units seeking consistent fit and shape across models and sizes while reducing fabric and foam wastage in cutting.</li>
            </ul>
          </div>

          {/* Custom Carpentry */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Custom carpentry and bespoke studios
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Workshops making custom wardrobes, beds, TV units, and storage solutions that need accurate patterns for curved, tapered, or complex parts.</li>
              <li>High-end bespoke studios that want professional, documented pattern sets for repeat orders and franchise manufacturing.</li>
            </ul>
          </div>

          {/* OEM Suppliers */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              OEM and component suppliers
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Vendors supplying standardized furniture components like seats, backs, armrests, cushions, panel kits, and knock-down sets to major brands.</li>
              <li>Suppliers who need digital pattern libraries to coordinate production across multiple subcontracting locations.</li>
            </ul>
          </div>

          {/* Designers */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Interior and product design firms
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Interior and product design studios that move concepts into production-ready 2D patterns for furniture prototypes and pilot runs.</li>
              <li>Design teams needing fast pattern iterations to validate ergonomics, proportions, and fabric consumption before tooling or bulk orders.</li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="font-semibold text-primary mb-3">
              Training centres and vocational institutes
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Furniture, woodworking, upholstery, and interior training programs that want students to learn industry-grade pattern design workflows for furniture.</li>
              <li>Skill-development centres preparing technicians for modern CNC-enabled furniture factories and upholstery units.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
