def calculate_ndvi(red_band, nir_band):
    return (nir_band - red_band) / (nir_band + red_band)
