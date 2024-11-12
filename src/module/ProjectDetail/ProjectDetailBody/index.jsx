import { Fragment, useEffect, useRef } from 'react';
import * as prismic from '@prismicio/client'
import './style.scss'
import { isEmpty } from '@/js/utils';

const ProjectDetailBody = ({ data, ...props }) => {
    const container = useRef()

    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <section className='proj-dtl-body' ref={container}>
            <div className="container grid">
                <div className="proj-dtl-body-thumb-wrapper">
                    <div className="proj-dtl-body-thumb">
                        <img src={data.thumbnail.url} alt={data.thumbnail.alt} width={data.thumbnail.dimensions.width} height={data.thumbnail.dimensions.height} className='img img-fill' />
                    </div>
                </div>
                {data.show_product_overview && (
                    <Fragment>
                        <div className="proj-dtl-body-show_product_overview-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-show_product_overview-label proj-dtl-body-label txt txt-up">({data.label_product_overview[0]?.text})</div>
                            <div className="proj-dtl-body-show_product_overview-sub proj-dtl-body-sub txt">{data.subtitle_product_overview[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_product_overview) && (
                            <div className="proj-dtl-body-product_overview-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-product_overview-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_product_overview) }} />
                            </div>
                        )}
                        {!isEmpty(data.big_image_product_overview[0].image) && (
                            <div className="proj-dtl-body-product_overview-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_image_product_overview.map((item) => (
                                    <div className="proj-dtl-body-product_overview-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.small_image_product_overview[0].image) && (
                            <div className="proj-dtl-body-product_overview-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_image_product_overview.map((item) => (
                                    <div className="proj-dtl-body-product_overview-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_problem && (
                    <Fragment>
                        <div className="proj-dtl-body-product_overview-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-product_overview-label proj-dtl-body-label txt txt-up">({data.label_problem[0]?.text})</div>
                            <div className="proj-dtl-body-product_overview-sub proj-dtl-body-sub txt">{data.subtitle_propblem[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_problem) && (
                            <div className="proj-dtl-body-product_overview-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-product_overview-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_problem) }} />
                            </div>
                        )}
                    </Fragment>
                )}

                {data.show_challenges && (
                    <Fragment>
                        <div className="proj-dtl-body-challenges-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-challenges-label proj-dtl-body-label txt txt-up">({data.label_challenges[0]?.text})</div>
                            <div className="proj-dtl-body-challenges-sub proj-dtl-body-sub txt">{data.subtitle_challenges[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_challenges) && (
                            <div className="proj-dtl-body-challenges-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-challenges-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_challenges) }} />
                            </div>
                        )}
                        {!isEmpty(data.subdesc_challenges) && (
                            <div className="proj-dtl-body-challenges-subdesc-wrapper proj-dtl-body-subdesc-wrapper">
                               {data.subdesc_challenges?.map((item, idx) => (
                                    <div className="proj-dtl-body-challenges-subdesc-item proj-dtl-body-subdesc" key={idx}>
                                        <div className="line line-ver" />
                                        <div className="proj-dtl-body-challenges-subdesc-item-title proj-dtl-body-subdesc-title txt txt-32">{item.title[0]?.text}</div>
                                        <div className="proj-dtl-body-challenges-subdesc-item-desc proj-dtl-body-subdesc-desc" dangerouslySetInnerHTML={{ __html: prismic.asHTML(item.desc) }} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* {!isEmpty(data.big_images_challenges[0].image) && (
                            <div className="proj-dtl-body-challenges-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_challenges.map((item) => (
                                    <div className="proj-dtl-body-challenges-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.small_images_challenges[0].image) && (
                            <div className="proj-dtl-body-challenges-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_challenges.map((item) => (
                                    <div className="proj-dtl-body-challenges-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                    </div>
                                ))}
                            </div>
                        )} */}
                    </Fragment>
                )}

                {data.show_progress && (
                    <Fragment>
                        <div className="proj-dtl-body-progress-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-progress-label proj-dtl-body-label txt txt-up">({data.label_progress[0]?.text})</div>
                            <div className="proj-dtl-body-progress-sub proj-dtl-body-sub txt">{data.sub_progress[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_progress) && (
                            <div className="proj-dtl-body-progress-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-progress-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_progress) }} />
                            </div>
                        )}
                        {!isEmpty(data.big_images_progress[0].image) && (
                            <div className="proj-dtl-body-progress-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_progress.map((item) => (
                                    <div className="proj-dtl-body-progress-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.small_images_progress[0].image) && (
                            <div className="proj-dtl-body-progress-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_progress.map((item) => (
                                    <div className="proj-dtl-body-progress-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' />
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}
                {data.show_final_design && (
                    <Fragment>
                        <div className="proj-dtl-body-final_design-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-final_design-label proj-dtl-body-label txt txt-up">({data.label_final_design[0]?.text})</div>
                            <div className="proj-dtl-body-final_design-sub proj-dtl-body-sub txt">{data.subtitle_final_design[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_final_design) && (
                            <div className="proj-dtl-body-final_design-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-final_design-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_final_design) }} />
                            </div>
                        )}
                        {!isEmpty(data.big_images_final_design[0].image) && (
                            <div className="proj-dtl-body-final_design-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_final_design.map((item) => (
                                    <div className="proj-dtl-body-final_design-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.small_images_final_design[0].image) && (
                            <div className="proj-dtl-body-final_design-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_final_design.map((item) => (
                                    <div className="proj-dtl-body-final_design-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}
                {data.show_takeaway && (
                    <Fragment>
                        <div className="proj-dtl-body-takeaway-label-wrapper proj-dtl-body-label-wrapper">
                            <div className="proj-dtl-body-takeaway-label proj-dtl-body-label txt txt-up">({data.label_takeaway[0]?.text})</div>
                            <div className="proj-dtl-body-takeaway-sub proj-dtl-body-sub txt">{data.subtitle_takeaway[0]?.text}</div>
                        </div>
                        {!isEmpty(data.desc_takeaway) && (
                            <div className="proj-dtl-body-takeaway-desc-wrapper proj-dtl-body-desc">
                                <div className="proj-dtl-body-takeaway-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_takeaway) }} />
                            </div>
                        )}
                        {!isEmpty(data.sub_describle_takeaway) && (
                            <div className="proj-dtl-body-takeaway-subdesc-wrapper proj-dtl-body-subdesc-wrapper">
                               {data.sub_describle_takeaway?.map((item, idx) => (
                                    <div className="proj-dtl-body-takeaway-subdesc-item proj-dtl-body-subdesc" key={idx}>
                                        <div className="line line-ver" />
                                        <div className="proj-dtl-body-takeaway-subdesc-item-title proj-dtl-body-subdesc-title txt txt-32">{item.title[0]?.text}</div>
                                        <div className="proj-dtl-body-takeaway-subdesc-item-desc proj-dtl-body-subdesc-desc" dangerouslySetInnerHTML={{ __html: prismic.asHTML(item.desc) }} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.big_images_takeaway[0].image) && (
                            <div className="proj-dtl-body-takeaway-bigimg-wrapper proj-dtl-body-bigimg-wrapper">
                                {data.big_images_takeaway.map((item) => (
                                    <div className="proj-dtl-body-takeaway-bigimg proj-dtl-body-bigimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {!isEmpty(data.small_images_takeaway[0].image) && (
                            <div className="proj-dtl-body-takeaway-smallimg-wrapper proj-dtl-body-smallimg-wrapper">
                                {data.small_images_takeaway.map((item) => (
                                    <div className="proj-dtl-body-takeaway-smallimg proj-dtl-body-smallimg" key={item.image.id}>
                                        <img src={item.image.url} alt={item.image.alt} width={item.image.dimensions.width} height={item.image.dimensions.height} className='img img-fill' key={item.id} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </Fragment>
                )}
            </div>
        </section>
    )
}

export default ProjectDetailBody;