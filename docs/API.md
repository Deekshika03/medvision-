# MedVision+ API Documentation

## Base URL
```
http://localhost:3000
```

## Authentication
- API Key required in environment variables
- No authentication needed for API calls

## Endpoints

### Get Medicine Information
Retrieve comprehensive information about a medicine.

**Endpoint:** `GET /api/medicine/info`

**Parameters:**
- `name` (required): Medicine name (e.g., "Paracetamol", "Aspirin")

**Example Request:**
```bash
curl "http://localhost:3000/api/medicine/info?name=Paracetamol"
```

**Example Response:**
```json
{
  "medicine_info": {
    "brand_name": "Tylenol",
    "composition": "Paracetamol 500mg",
    "strength": "500mg",
    "dosage_form": "Tablet",
    "common_uses": "Pain relief, fever reduction",
    "dosage_guidance": "Adults: 1-2 tablets every 4-6 hours. Maximum 8 tablets in 24 hours."
  },
  "safety_info": {
    "common_side_effects": [
      "Nausea",
      "Stomach upset",
      "Allergic reactions (rare)"
    ]
  },
  "alternatives_sorted_by_price": [
    {
      "name": "Generic Paracetamol",
      "price": "$2.99"
    },
    {
      "name": "Tylenol Brand",
      "price": "$8.99"
    }
  ],
  "disclaimer": "This system provides informational purposes only. It does not provide medical advice."
}
```

## Error Responses

### 400 Bad Request
```json
{
  "error": true,
  "message": "Medicine name is required",
  "disclaimer": "This system provides informational purposes only. It does not provide medical advice."
}
```

### 500 Internal Server Error
```json
{
  "error": true,
  "message": "Internal server error",
  "disclaimer": "This system provides informational purposes only. It does not provide medical advice."
}
```

## Frontend Proxy Endpoint

The Flask frontend provides a proxy endpoint:

**Endpoint:** `GET /api/medicine/search`
**Base URL:** `http://localhost:5002`

This endpoint forwards requests to the Node.js backend and handles CORS issues.

## Rate Limits
- No rate limits currently implemented
- Depends on GROQ API limits

## Response Format
All responses include:
- Medicine information
- Safety data
- Alternative medicines
- Medical disclaimer

## Status Codes
- `200` - Success
- `400` - Bad Request (missing parameters)
- `500` - Internal Server Error
- `503` - Service Unavailable (backend not running)