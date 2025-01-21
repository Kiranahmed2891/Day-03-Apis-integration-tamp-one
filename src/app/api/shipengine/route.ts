// import { NextRequest } from "next/server";
import ShipEngine from "shipengine";

// export async function GET(){
//     return new Response(JSON.stringify({message:"shipengineTesting"}))
// }

// export async function POST(request: NextRequest){

// }
import { NextRequest } from "next/server";
import ShipEngineAPI from "shipengine";

// Create ShipEngine instance (Do not export this instance)
const shipEngineInstance = new ShipEngineAPI({
  apiKey: process.env.SHIPENGINE_API_KEY as string,
  
});



export async function GET() {
  return new Response(JSON.stringify({ message: "ShipEngine Testing" }));
}

export async function POST(request: NextRequest) {
  const { shipToAddress, packages } = await request.json();

  try {
    // Use the ShipEngine instance to fetch shipment details
    const shipmentDetails = await shipEngineInstance.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "Kiran Ahmed",
          phone: "0300*",
          addressLine1: "Address 1",
          addressLine2: "Address 2",
          cityLocality: "Karachi",
          stateProvince: "IL",
          postalCode: "12345",
          countryCode: "PK",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_FIRST_COURIER || "",
          process.env.SHIPENGINE_SECOND_COURIER || "",
          process.env.SHIPENGINE_THIRD_COURIER || "",
          process.env.SHIPENGINE_FOURTH_COURIER || "",
        ].filter(Boolean),
      },
    });

    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Detailed error:", error.message);
      return new Response(
        JSON.stringify({ error: "Error Occurred", details: error.message }),
        { status: 500 }
      );
    } else {
      console.error("Unknown error type:", error);
      return new Response(
        JSON.stringify({ error: "An unknown error occurred" }),
        { status: 500 }
      );
    }
  }
}

