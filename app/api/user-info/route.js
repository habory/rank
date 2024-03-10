export async function GET(req, res) {
  try {


    const userInfo = {}

    return NextResponse.json(userInfo);
  } catch (error) {
    console.error("Error riot user info:", error);
  }
}