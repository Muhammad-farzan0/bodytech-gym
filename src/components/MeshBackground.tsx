export default function MeshBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
    >
      {/* restrained ambient glow — subtle, not rainbow-bright */}
      <div className="absolute -top-40 left-1/4 h-[40rem] w-[40rem] animate-drift rounded-full bg-coral/[0.07] blur-[140px]" />
      <div
        className="absolute top-1/3 right-[-14rem] h-[34rem] w-[34rem] animate-drift rounded-full bg-pink/[0.10] blur-[140px]"
        style={{ animationDelay: "-6s" }}
      />
      {/* faint grid for premium texture, à la product-site backgrounds */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* vignette to keep focus centered */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
