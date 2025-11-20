export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      ok: false,
      message: "Méthode non autorisée",
    });
  }

  const { name, email, message } = req.body ?? {};

  console.log("📩 Nouveau lead :", {
    name,
    email,
    message,
    date: new Date().toISOString(),
  });

  return res.status(200).json({
    ok: true,
    message: "Lead reçu — merci !",
  });
}
